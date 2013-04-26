

function AstNode (attr, children, loc) {
  for (var prop in attr) {
    this[prop] = attr[prop];
  }
  this._children = children||[];
  assignParent(this, this._children);
  this.loc = loc;
}

AstNode.prototype = {
  children: function (children) {
    if (children) {
      assignParent(this, this._children);
      this._children = children;
    }
    return this._children;
  },
  append: function (node) {
    node.parent = this;
    this._children.push(node);
    return this;
  },
  toAst: function (tab) {
    tab = tab || '';
    var kids = this.children().map(function(kid) {
      return !Array.isArray(kid) ? kid.toAst(tab + ' ') : kid.map(function(k) { return k.toAst(tab + ' '); }).join(', ');
    });
    return tab + this.type + '\n' + kids.join('\n');
  }
};

function assignParent(parent, kids) {
  kids.forEach(function(kid) {
    kid.parent = parent;
  });
}

var NODES = [
  'Program',
  'ProcedureStmt',
  'BlockStmt',
  'LoopStmt',
  'MuLoopStmt',
  'NumberLit',
  'BooleanLit',
  'OutputExpr',
  'Identifier',
  'CellExpr',
  'PlusExpr',
  'TimesExpr',
  'ApplyExpr',
  'LessCond',
  'GreaterCond',
  'GreaterCond',
  'EqualCond',
  'CompoundCond',
  'AssignStmt',
  'IfThenStmt',
  'QuitStmt',
  'AbortStmt'
];

var ast = {};

NODES.forEach(function (type) {
  ast[type] = function (attr, a, b, c, d) {
    var obj = new AstNode(attr, a, b, c, d);
    obj.type = type;
    return obj;
  };
});

module.exports = ast;
