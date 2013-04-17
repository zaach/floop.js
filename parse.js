/* Jison generated parser */
var parse = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"procedures":4,"EOF":5,"procedure":6,"DEFINE":7,"PROCEDURE":8,"''":9,"IDENT":10,"[":11,"parameters":12,"]":13,":":14,"block":15,".":16,",":17,"identifier":18,"BLOCK":19,"NUMBER":20,"BEGIN":21,"statements":22,"END":23,"statement":24,";":25,"cell":26,"<=":27,"expression":28,"output":29,"LOOP":30,"TIMES":31,"AT":32,"MOST":33,"MU_LOOP":34,"IF":35,"condition":36,"THEN":37,"QUIT":38,"ABORT":39,"<":40,">":41,"=":42,"{":43,"AND":44,"}":45,"arguments":46,"NO":47,"YES":48,"+":49,"*":50,"OUTPUT":51,"CELL":52,"(":53,")":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"DEFINE",8:"PROCEDURE",9:"''",10:"IDENT",11:"[",13:"]",14:":",16:".",17:",",19:"BLOCK",20:"NUMBER",21:"BEGIN",23:"END",25:";",27:"<=",30:"LOOP",31:"TIMES",32:"AT",33:"MOST",34:"MU_LOOP",35:"IF",37:"THEN",38:"QUIT",39:"ABORT",40:"<",41:">",42:"=",43:"{",44:"AND",45:"}",47:"NO",48:"YES",49:"+",50:"*",51:"OUTPUT",52:"CELL",53:"(",54:")"},
productions_: [0,[3,2],[4,2],[4,0],[6,11],[12,3],[12,1],[15,9],[22,3],[22,2],[24,3],[24,3],[24,5],[24,7],[24,3],[24,6],[24,6],[24,3],[24,3],[36,1],[36,3],[36,3],[36,3],[36,5],[28,1],[28,1],[28,4],[28,1],[28,1],[28,1],[28,1],[28,3],[28,3],[29,1],[26,4],[46,3],[46,1],[18,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return Program({},[$$[$0-1]]) 
break;
case 2:this.$ = ($$[$0-1].push($$[$0]), $$[$0-1]);
break;
case 3:this.$ = [];
break;
case 4:this.$ = ProcedureStmt({name:$$[$0-7]},[$$[$0-4],$$[$0-1]]);
break;
case 5:this.$ = ($$[$0-2].push($$[$0]), $$[$0-2]);
break;
case 6:this.$ = [$$[$0]];
break;
case 7:this.$ = BlockStmt({id: $$[$0-7]},[$$[$0-4]]);
break;
case 8:this.$ = ($$[$0-2].push($$[$0]), $$[$0-2]);
break;
case 9:this.$ = [$$[$0-1]];
break;
case 10:this.$ = AssignStmt({}, [$$[$0-2], $$[$0]]);
break;
case 11:this.$ = AssignStmt({}, [$$[$0-2], $$[$0]]);
break;
case 12:this.$ = LoopStmt({}, [$$[$0-3], $$[$0]]);
break;
case 13:this.$ = LoopStmt({}, [$$[$0-3], $$[$0]]);
break;
case 14:this.$ = MuLoopStmt({}, [$$[$0]]);
break;
case 15:this.$ = IfThenStmt({}, [$$[$0-4], $$[$0]]);
break;
case 16:this.$ = IfThenStmt({}, [$$[$0-4], $$[$0]]);
break;
case 17:this.$ = QuitStmt({id: $$[$0]});
break;
case 18:this.$ = AbortStmt({id: $$[$0]});
break;
case 20:this.$ = LessCond({}, [$$[$0-2], $$[$0]]);
break;
case 21:this.$ = GreaterCond({}, [$$[$0-2], $$[$0]]);
break;
case 22:this.$ = EqualCond({}, [$$[$0-2], $$[$0]]);
break;
case 23:this.$ = CompoundCond({}, [$$[$0-4], $$[$0-2]]);
break;
case 24:this.$ = NumberLit({value: $$[$0]}, [], _$[$0]);
break;
case 26:this.$ = ApplyExpr({name:$$[$0-3]}, $$[$0-1]);
break;
case 29:this.$ = BooleanLit({value: false}, [], _$[$0]);
break;
case 30:this.$ = BooleanLit({value: true}, [], _$[$0]);
break;
case 31:this.$ = PlusExpr({}, [$$[$0-2], $$[$0]]);
break;
case 32:this.$ = TimesExpr({}, [$$[$0-2], $$[$0]]);
break;
case 33:this.$ = OutputExpr({},[],_$[$0]);
break;
case 34:this.$ = CellExpr({id: $$[$0-1]});
break;
case 35:this.$ = ($$[$0-2].push($$[$0]), $$[$0-2]);
break;
case 36:this.$ = [$$[$0]];
break;
case 37:this.$ = Identifier({value: $$[$0]},_$[$0]);
break;
}
},
table: [{3:1,4:2,5:[2,3],7:[2,3]},{1:[3]},{5:[1,3],6:4,7:[1,5]},{1:[2,1]},{5:[2,2],7:[2,2]},{8:[1,6]},{9:[1,7]},{10:[1,8]},{9:[1,9]},{11:[1,10]},{10:[1,13],12:11,18:12},{13:[1,14],17:[1,15]},{13:[2,6],17:[2,6]},{13:[2,37],17:[2,37]},{14:[1,16]},{10:[1,13],18:17},{15:18,19:[1,19]},{13:[2,5],17:[2,5]},{16:[1,20]},{20:[1,21]},{5:[2,4],7:[2,4]},{14:[1,22]},{21:[1,23]},{22:24,24:25,26:26,29:27,30:[1,28],34:[1,29],35:[1,30],38:[1,31],39:[1,32],51:[1,34],52:[1,33]},{19:[1,35],24:36,26:26,29:27,30:[1,28],34:[1,29],35:[1,30],38:[1,31],39:[1,32],51:[1,34],52:[1,33]},{25:[1,37]},{27:[1,38]},{27:[1,39]},{10:[1,44],18:43,20:[1,42],26:45,28:40,29:46,32:[1,41],47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{14:[1,49]},{10:[1,44],18:43,20:[1,42],26:45,28:51,29:46,36:50,43:[1,52],47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{19:[1,53]},{30:[1,54]},{53:[1,55]},{13:[2,33],17:[2,33],25:[2,33],27:[2,33],31:[2,33],40:[2,33],41:[2,33],42:[2,33],44:[2,33],45:[2,33],49:[2,33],50:[2,33]},{20:[1,56]},{25:[1,57]},{19:[2,9],30:[2,9],34:[2,9],35:[2,9],38:[2,9],39:[2,9],51:[2,9],52:[2,9]},{10:[1,44],18:43,20:[1,42],26:45,28:58,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{10:[1,44],18:43,20:[1,42],26:45,28:59,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{31:[1,60],49:[1,61],50:[1,62]},{33:[1,63]},{13:[2,24],17:[2,24],25:[2,24],31:[2,24],40:[2,24],41:[2,24],42:[2,24],44:[2,24],45:[2,24],49:[2,24],50:[2,24]},{13:[2,25],17:[2,25],25:[2,25],31:[2,25],40:[2,25],41:[2,25],42:[2,25],44:[2,25],45:[2,25],49:[2,25],50:[2,25]},{11:[1,64],13:[2,37],17:[2,37],25:[2,37],31:[2,37],40:[2,37],41:[2,37],42:[2,37],44:[2,37],45:[2,37],49:[2,37],50:[2,37]},{13:[2,27],17:[2,27],25:[2,27],31:[2,27],40:[2,27],41:[2,27],42:[2,27],44:[2,27],45:[2,27],49:[2,27],50:[2,27]},{13:[2,28],17:[2,28],25:[2,28],31:[2,28],40:[2,28],41:[2,28],42:[2,28],44:[2,28],45:[2,28],49:[2,28],50:[2,28]},{13:[2,29],17:[2,29],25:[2,29],31:[2,29],40:[2,29],41:[2,29],42:[2,29],44:[2,29],45:[2,29],49:[2,29],50:[2,29]},{13:[2,30],17:[2,30],25:[2,30],31:[2,30],40:[2,30],41:[2,30],42:[2,30],44:[2,30],45:[2,30],49:[2,30],50:[2,30]},{15:65,19:[1,19]},{17:[1,66]},{17:[2,19],40:[1,67],41:[1,68],42:[1,69],44:[2,19],45:[2,19],49:[1,61],50:[1,62]},{10:[1,44],18:43,20:[1,42],26:45,28:51,29:46,36:70,43:[1,52],47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{20:[1,71]},{20:[1,72]},{20:[1,73]},{14:[1,74]},{19:[2,8],30:[2,8],34:[2,8],35:[2,8],38:[2,8],39:[2,8],51:[2,8],52:[2,8]},{25:[2,10],49:[1,61],50:[1,62]},{25:[2,11],49:[1,61],50:[1,62]},{14:[1,75]},{10:[1,44],18:43,20:[1,42],26:45,28:76,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{10:[1,44],18:43,20:[1,42],26:45,28:77,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{10:[1,44],18:43,20:[1,42],26:45,28:78,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{10:[1,44],18:43,20:[1,42],26:45,28:80,29:46,46:79,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{25:[2,14]},{37:[1,81]},{10:[1,44],18:43,20:[1,42],26:45,28:82,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{10:[1,44],18:43,20:[1,42],26:45,28:83,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{10:[1,44],18:43,20:[1,42],26:45,28:84,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{44:[1,85]},{25:[2,17]},{25:[2,18]},{54:[1,86]},{23:[1,87]},{15:88,19:[1,19]},{13:[2,31],17:[2,31],25:[2,31],31:[2,31],40:[2,31],41:[2,31],42:[2,31],44:[2,31],45:[2,31],50:[1,62]},{13:[2,32],17:[2,32],25:[2,32],31:[2,32],40:[2,32],41:[2,32],42:[2,32],44:[2,32],45:[2,32],49:[2,32]},{31:[1,89],49:[1,61],50:[1,62]},{13:[1,90],17:[1,91]},{13:[2,36],17:[2,36],49:[1,61],50:[1,62]},{14:[1,92]},{17:[2,20],44:[2,20],45:[2,20],49:[1,61],50:[1,62]},{17:[2,21],44:[2,21],45:[2,21],49:[1,61],50:[1,62]},{17:[2,22],44:[2,22],45:[2,22],49:[1,61],50:[1,62]},{10:[1,44],18:43,20:[1,42],26:45,28:51,29:46,36:93,43:[1,52],47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{13:[2,34],17:[2,34],25:[2,34],27:[2,34],31:[2,34],40:[2,34],41:[2,34],42:[2,34],44:[2,34],45:[2,34],49:[2,34],50:[2,34]},{16:[2,7],25:[2,7]},{25:[2,12]},{14:[1,94]},{13:[2,26],17:[2,26],25:[2,26],31:[2,26],40:[2,26],41:[2,26],42:[2,26],44:[2,26],45:[2,26],49:[2,26],50:[2,26]},{10:[1,44],18:43,20:[1,42],26:45,28:95,29:46,47:[1,47],48:[1,48],51:[1,34],52:[1,33]},{15:97,19:[1,19],24:96,26:26,29:27,30:[1,28],34:[1,29],35:[1,30],38:[1,31],39:[1,32],51:[1,34],52:[1,33]},{45:[1,98]},{15:99,19:[1,19]},{13:[2,35],17:[2,35],49:[1,61],50:[1,62]},{25:[2,15]},{25:[2,16]},{17:[2,23],44:[2,23],45:[2,23]},{25:[2,13]}],
defaultActions: {3:[2,1],65:[2,14],71:[2,17],72:[2,18],88:[2,12],96:[2,15],97:[2,16],99:[2,13]},
parseError: function parseError(str, hash) {
    throw new Error(str);
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    if (typeof this.lexer.yylloc == "undefined")
        this.lexer.yylloc = {};
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    if (typeof this.yy.parseError === "function")
        this.parseError = this.yy.parseError;
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || 1;
        if (typeof token !== "number") {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol == null)
                symbol = lex();
            action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
            if (!recovering) {
                expected = [];
                for (p in table[state])
                    if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                    }
                var errStr = "";
                if (this.lexer.showPosition) {
                    errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + this.terminals_[symbol] + "'";
                } else {
                    errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                }
                this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
            }
        }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0)
                    recovering--;
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
            r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
            if (typeof r !== "undefined") {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}
};

var ast = require('./ast'),

Program       = ast.Program,
ProcedureStmt = ast.ProcedureStmt,
BlockStmt     = ast.BlockStmt,
LoopStmt      = ast.LoopStmt,
MuLoopStmt    = ast.MuLoopStmt,
NumberLit     = ast.NumberLit,
BooleanLit    = ast.BooleanLit,
OutputExpr    = ast.OutputExpr,
Identifier    = ast.Identifier,
CellExpr      = ast.CellExpr,
PlusExpr      = ast.PlusExpr,
TimesExpr     = ast.TimesExpr,
ApplyExpr     = ast.ApplyExpr,
LessCond      = ast.LessCond,
GreaterCond   = ast.GreaterCond,
GreaterCond   = ast.GreaterCond,
EqualCond     = ast.EqualCond,
CompoundCond  = ast.CompoundCond,
AssignStmt    = ast.AssignStmt,
IfThenStmt    = ast.IfThenStmt,
QuitStmt      = ast.QuitStmt,
AbortStmt     = ast.AbortStmt;

/* Jison generated lexer */
var lexer = (function(){
var lexer = ({EOF:1,
parseError:function parseError(str, hash) {
        if (this.yy.parseError) {
            this.yy.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },
setInput:function (input) {
        this._input = input;
        this._more = this._less = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
        return this;
    },
input:function () {
        var ch = this._input[0];
        this.yytext+=ch;
        this.yyleng++;
        this.match+=ch;
        this.matched+=ch;
        var lines = ch.match(/\n/);
        if (lines) this.yylineno++;
        this._input = this._input.slice(1);
        return ch;
    },
unput:function (ch) {
        this._input = ch + this._input;
        return this;
    },
more:function () {
        this._more = true;
        return this;
    },
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
    },
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c+"^";
    },
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) this.done = true;

        var token,
            match,
            tempMatch,
            index,
            col,
            lines;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i=0;i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (!this.options.flex) break;
            }
        }
        if (match) {
            lines = match[0].match(/\n.*/g);
            if (lines) this.yylineno += lines.length;
            this.yylloc = {first_line: this.yylloc.last_line,
                           last_line: this.yylineno+1,
                           first_column: this.yylloc.last_column,
                           last_column: lines ? lines[lines.length-1].length-1 : this.yylloc.last_column + match[0].length}
            this.yytext += match[0];
            this.match += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            this.matched += match[0];
            token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
            if (token) return token;
            else return;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(), 
                    {text: "", token: null, line: this.yylineno});
        }
    },
lex:function lex() {
        var r = this.next();
        if (typeof r !== 'undefined') {
            return r;
        } else {
            return this.lex();
        }
    },
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },
popState:function popState() {
        return this.conditionStack.pop();
    },
_currentRules:function _currentRules() {
        return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
    },
topState:function () {
        return this.conditionStack[this.conditionStack.length-2];
    },
pushState:function begin(condition) {
        this.begin(condition);
    }});
lexer.options = {};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* ignore */
break;
case 1:return 20
break;
case 2:return 7
break;
case 3:return 8
break;
case 4:return 19
break;
case 5:return 21
break;
case 6:return 51
break;
case 7:return 52
break;
case 8:return 35
break;
case 9:return 37
break;
case 10:return 30
break;
case 11:return yy.bloop ? 'INVALID' : 'MU_LOOP'
break;
case 12:return 32
break;
case 13:return 33
break;
case 14:return 31
break;
case 15:return 39
break;
case 16:return 23
break;
case 17:return 38
break;
case 18:return 44
break;
case 19:return 48
break;
case 20:return 47
break;
case 21:return 10
break;
case 22:return 16
break;
case 23:return "''"
break;
case 24:return 11
break;
case 25:return 13
break;
case 26:return 53
break;
case 27:return 54
break;
case 28:return 43
break;
case 29:return 45
break;
case 30:return 14
break;
case 31:return 25
break;
case 32:return 17
break;
case 33:return 49
break;
case 34:return 50
break;
case 35:return 50  //non-ascii
break;
case 36:return 27
break;
case 37:return 27 //non-ascii
break;
case 38:return 40
break;
case 39:return 41
break;
case 40:return 42
break;
case 41:return 5
break;
case 42:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/,/^([1-9][0-9]+|[0-9])/,/^DEFINE\b/,/^PROCEDURE\b/,/^BLOCK\b/,/^BEGIN\b/,/^OUTPUT\b/,/^CELL\b/,/^IF\b/,/^THEN\b/,/^LOOP\b/,/^MU-LOOP\b/,/^AT\b/,/^MOST\b/,/^TIMES\b/,/^ABORT\b/,/^END\b/,/^QUIT\b/,/^AND\b/,/^YES\b/,/^NO\b/,/^[A-Z-]+\??/,/^\./,/^''/,/^\[/,/^\]/,/^\(/,/^\)/,/^\{/,/^\}/,/^:/,/^;/,/^,/,/^\+/,/^\*/,/^×/,/^<=/,/^⇐/,/^</,/^>/,/^=/,/^$/,/^./];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parse;
exports.parse = function () { return parse.parse.apply(parse, arguments); }
exports.main = function commonjsMain(args) {
    if (!args[1])
        throw new Error('Usage: '+args[0]+' FILE');
    if (typeof process !== 'undefined') {
        var source = require('fs').readFileSync(require('path').join(process.cwd(), args[1]), "utf8");
    } else {
        var cwd = require("file").path(require("file").cwd());
        var source = cwd.join(args[1]).read({charset: "utf-8"});
    }
    return exports.parser.parse(source);
}
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(typeof process !== 'undefined' ? process.argv.slice(1) : require("system").args);
}
}