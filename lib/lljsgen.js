function id(identifier) {
  return identifier.split('-').join('_').replace('?', '$');
}

function llJsGen(ast, options) {
  if (!options) options = {};

  var runningTime = options.runningTime;

  return toLLJS(ast);

  function toLLJS(ast) {
    var str;
    var kids = ast.children();

    switch (ast.type) {
      case 'Program':
        str = 'extern _print, start, end;\n';

        kids.forEach(function(procedure) {
          str += toLLJS(procedure);
        });

        if (!options.e) {
          str += 'function void main() {\n';
          str += 'start();\n';
          str += '_print(MAIN());\n';
          str += '_print(int(end()));\n';
          str += '\n}';
        }

        return str;

      case 'ProcedureStmt':
        var args = kids[0].map(function(arg) {
          return 'int ' + toLLJS(arg);
        });

        str = 'function int ' + id(ast.name);
        str += '(' + args.join(', ') + ') ';
        str += '{\nlet int $output = 0;\nlet int $cell[100];\n\n';

        str += toLLJS(kids[1]);

        str += 'return $output;\n}\n\n';

        return str;

      case 'BlockStmt':
        var blockId = ast.id;
        var i = '$block' + blockId;

        str = '// block ' + blockId + '\n';
        if (ast.parent.type !== 'LoopStmt') {
          str = 'let int ' + i + ' = 0;\n';
          str += 'for (; '+i+' < 1; '+i+'++){\n';
        } else {
          str += '{\n';
        }

        kids.forEach(function(statement) {
          str += toLLJS(statement);
        });

        str += '\n}\n';

        return str;

      // statements
      case 'AssignStmt':
        str = toLLJS(kids[0]) + ' = int(' + toLLJS(kids[1]) + ');\n';

        return str;

      case 'LoopStmt':
        var times = toLLJS(kids[0]);
        var blockId = kids[1].id;
        var i = '$i' + blockId;

        str = 'let int ' + i + ' = ' + times + ';';
        str += 'for(; '+i+' > 0;'+i+'--) {\n';
        str += toLLJS(kids[1]);
        str += '}\n';

        return str;

      case 'IfThenStmt':
        str = 'if (' + toLLJS(kids[0]) + ') {\n';
        str += toLLJS(kids[1]);
        str += '}\n';

        return str;

      case 'QuitStmt':
        //str = '$state = ' + ast.id + ';\n';
        //return str + 'break;';
        return 'continue;';

      case 'AbortStmt':
        //str = '$state = ' + ast.id + ';\n';
        //return str + 'break;\n';
        return 'break;';

      // conditions
      case 'LessCond':
        return toLLJS(kids[0]) + ' < ' + toLLJS(kids[1]);

      case 'GreaterCond':
        return toLLJS(kids[0]) + ' > ' + toLLJS(kids[1]);

      case 'CompoundCond':
        return '(' + toLLJS(kids[0]) + ' && ' + toLLJS(kids[1]) + ')';

      // expressions
      case 'ApplyExpr':
        var args = kids.map(function(arg) {
          return toLLJS(arg);
        });

        return id(ast.name) + '(' + args.join(', ') + ')';

      case 'CellExpr':
        return '$cell[' + ast.id + ']';

      case 'OutputExpr':
        return '$output';

      case 'NumberLit':
        return ast.value.toString();

      case 'BooleanLit':
        return ast.value.toString();

      case 'PlusExpr':
        return toLLJS(kids[0]) + ' + ' + toLLJS(kids[1]);

      case 'TimesExpr':
        return toLLJS(kids[0]) + ' * ' + toLLJS(kids[1]);

      case 'Identifier':
        return id(ast.value);
    }

  }
}

module.exports = llJsGen;
