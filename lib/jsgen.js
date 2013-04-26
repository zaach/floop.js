
function id(identifier) {
  return identifier.split('-').join('_').replace('?', '$');
}

function jsGen(ast, options) {
  if (!options) options = {};

  var runningTime = options.runningTime;

  return toJs(ast);

  function toJs(ast) {
    var str;
    var kids = ast.children();

    switch (ast.type) {
      case 'Program':
        str = '';
        if (options.m) str += 'var ' + options.m + ' = ';
        str += '(function(){\n\n';

        kids.forEach(function(procedure) {
          str += toJs(procedure);
        });

        if (!options.e) {
          str += 'var _print = typeof console != "undefined" ? console.log.bind(console) : print;\n';
          str += 'var start = Date.now();\n';
          str += '_print(MAIN());\n';
          str += '_print(Date.now() - start);\n';
        } else {
          str += 'return {';
          str += options.e.split(',').map(function(fn) { return fn + ': ' + fn; }).join(',\n');
          str += '}';
        }
        str += '\n})();';

        return str;

      case 'ProcedureStmt':
        var args = kids[0].map(function(arg) {
          return toJs(arg);
        });

        str = 'function ' + id(ast.name);
        str += '(' + args.join(', ') + ') ';
        str += '{\nvar $output = 0;\nvar $cell = [];\n\n';

        str += toJs(kids[1]);

        str += 'return $output;\n}\n\n';

        return str;

      case 'BlockStmt':
        str = '$block' + id(ast.id) + ': {\n';

        kids.forEach(function(statement) {
          str += toJs(statement);
        });

        str += '}\n';

        return str;

      // statements
      case 'AssignStmt':
        str = toJs(kids[0]) + ' = ' + toJs(kids[1]) + ' | 0;\n';

        return str;

      case 'LoopStmt':
        var times = toJs(kids[0]);
        var blockId = kids[1].id;
        var i = '$i' + blockId;

        str = '$loop' + blockId + ': ';
        str += 'for(var '+i+' = 0; '+i+' < ' + times + ';'+i+'++) {\n';
        str += toJs(kids[1]);
        str += '}\n';

        return str;

      case 'MuLoopStmt':
        var blockId = kids[0].id;
        str = '$loop' + blockId + ': ';
        str += 'while(true) {\n';
        str += toJs(kids[0]);
        str += '}\n';

        return str;

      case 'IfThenStmt':
        str = 'if (' + toJs(kids[0]) + ') {\n';
        str += toJs(kids[1]);
        str += '}\n';

        return str;

      case 'QuitStmt':
        return 'break $block' + ast.id + ';\n';

      case 'AbortStmt':
        return 'break $loop' + ast.id + ';\n';

      // conditions
      case 'LessCond':
        return toJs(kids[0]) + ' < ' + toJs(kids[1]);

      case 'GreaterCond':
        return toJs(kids[0]) + ' > ' + toJs(kids[1]);

      case 'EqualCond':
        return toJs(kids[0]) + ' === ' + toJs(kids[1]);

      case 'CompoundCond':
        return '(' + toJs(kids[0]) + ' && ' + toJs(kids[1]) + ')';

      // expressions
      case 'ApplyExpr':
        var args = kids.map(function(arg) {
          return toJs(arg);
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
        return toJs(kids[0]) + ' + ' + toJs(kids[1]);

      case 'TimesExpr':
        return toJs(kids[0]) + ' * ' + toJs(kids[1]);

      case 'Identifier':
        return id(ast.value);
    }
  }
}

module.exports = jsGen;
