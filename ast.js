
var ast = exports;

function AstNode (attr, children, loc) {
    for (var prop in attr) {
        this[prop] = attr[prop];
    }
    this._children = children||[];
    this.loc = loc;
}

AstNode.prototype = {
    children: function (children) {
        return children ? this._children = children : this._children;
    },
    append: function (node) {
        this._children.push(node);
        return this;
    }
};

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

NODES.forEach(function (type) {
    ast[type] = function (attr, a, b, c, d) {
        var obj = new AstNode(attr, a, b, c, d);
        obj.type = type;
        return obj;
    };
});
