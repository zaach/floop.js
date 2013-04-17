/* Jison generated parser */
var parse2 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"program_repetition0":4,"EOF":5,"procedure":6,"DEFINE":7,"PROCEDURE":8,"QUOTE":9,"IDENT":10,"[":11,"procedure_repetition0":12,"procedure_option0":13,"]":14,":":15,"block":16,".":17,"BLOCK":18,"NUMBER":19,"BEGIN":20,"block_repetition_plus0":21,"END":22,"statement":23,"cell":24,"<=":25,"expression":26,"output":27,"LOOP":28,"statement_option0":29,"TIMES":30,"MU_LOOP":31,"IF":32,"condition":33,",":34,"THEN":35,"statement_group0":36,"QUIT":37,"ABORT":38,"<":39,">":40,"=":41,"{":42,"AND":43,"}":44,"identifier":45,"expression_repetition0":46,"expression_option0":47,"NO":48,"YES":49,"+":50,"*":51,"OUTPUT":52,"CELL":53,"(":54,")":55,";":56,"AT":57,"MOST":58,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"DEFINE",8:"PROCEDURE",9:"QUOTE",10:"IDENT",11:"[",14:"]",15:":",17:".",18:"BLOCK",19:"NUMBER",20:"BEGIN",22:"END",25:"<=",28:"LOOP",30:"TIMES",31:"MU_LOOP",32:"IF",34:",",35:"THEN",37:"QUIT",38:"ABORT",39:"<",40:">",41:"=",42:"{",43:"AND",44:"}",48:"NO",49:"YES",50:"+",51:"*",52:"OUTPUT",53:"CELL",54:"(",55:")",56:";",57:"AT",58:"MOST"},
productions_: [0,[3,2],[6,12],[16,9],[23,3],[23,3],[23,6],[23,3],[23,6],[23,3],[23,3],[33,1],[33,3],[33,3],[33,3],[33,5],[26,1],[26,1],[26,5],[26,1],[26,1],[26,1],[26,1],[26,3],[26,3],[27,1],[24,4],[45,1],[4,0],[4,2],[12,0],[12,3],[13,0],[13,1],[21,2],[21,3],[29,0],[29,2],[36,1],[36,1],[46,0],[46,3],[47,0],[47,1]],
performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

var $0 = $$.length - 1;
switch (yystate) {
case 1: return Program({},$$[$0-1]) 
break;
case 2:this.$ = ProcedureStmt({name:$$[$0-8]},[$$[$0-5].concat([$$[$0-4]]),$$[$0-1]]);
break;
case 3:this.$ = BlockStmt({id: $$[$0-7]},$$[$0-4]);
break;
case 4:this.$ = AssignStmt({}, [$$[$0-2], $$[$0]]);
break;
case 5:this.$ = AssignStmt({}, [$$[$0-2], $$[$0]]);
break;
case 6:this.$ = LoopStmt({}, [$$[$0-3], $$[$0]]);
break;
case 7:this.$ = MuLoopStmt({}, [$$[$0]]);
break;
case 8:this.$ = IfThenStmt({}, [$$[$0-4], $$[$0]]);
break;
case 9:this.$ = QuitStmt({id: $$[$0]});
break;
case 10:this.$ = AbortStmt({id: $$[$0]});
break;
case 12:this.$ = LessCond({}, [$$[$0-2], $$[$0]]);
break;
case 13:this.$ = GreaterCond({}, [$$[$0-2], $$[$0]]);
break;
case 14:this.$ = EqualCond({}, [$$[$0-2], $$[$0]]);
break;
case 15:this.$ = CompoundCond({}, [$$[$0-4], $$[$0-2]]);
break;
case 16:this.$ = NumberLit({value: $$[$0]}, []);
break;
case 18:this.$ = ApplyExpr({name:$$[$0-4]}, $$[$0-2].concat([$$[$0-1]]));
break;
case 21:this.$ = BooleanLit({value: false}, []);
break;
case 22:this.$ = BooleanLit({value: true}, []);
break;
case 23:this.$ = PlusExpr({}, [$$[$0-2], $$[$0]]);
break;
case 24:this.$ = TimesExpr({}, [$$[$0-2], $$[$0]]);
break;
case 25:this.$ = OutputExpr({},[]);
break;
case 26:this.$ = CellExpr({id: $$[$0-1]});
break;
case 27:this.$ = Identifier({value: $$[$0]});
break;
case 28:this.$ = [];
break;
case 29:$$[$0-1].push($$[$0]);
break;
case 30:this.$ = [];
break;
case 31:$$[$0-2].push($$[$0-1]);
break;
case 34:this.$ = [$$[$0-1]];
break;
case 35:$$[$0-2].push($$[$0-1]);
break;
case 40:this.$ = [];
break;
case 41:$$[$0-2].push($$[$0-1]);
break;
}
},
table: [{3:1,4:2,5:[2,28],7:[2,28]},{1:[3]},{5:[1,3],6:4,7:[1,5]},{1:[2,1]},{5:[2,29],7:[2,29]},{8:[1,6]},{9:[1,7]},{10:[1,8]},{9:[1,9]},{11:[1,10]},{10:[2,30],12:11,14:[2,30]},{10:[1,14],13:12,14:[2,32],45:13},{14:[1,15]},{14:[2,33],34:[1,16]},{14:[2,27],34:[2,27]},{15:[1,17]},{10:[2,31],14:[2,31]},{16:18,18:[1,19]},{17:[1,20]},{19:[1,21]},{5:[2,2],7:[2,2]},{15:[1,22]},{20:[1,23]},{21:24,23:25,24:26,27:27,28:[1,28],31:[1,29],32:[1,30],37:[1,31],38:[1,32],52:[1,34],53:[1,33]},{18:[1,35],23:36,24:26,27:27,28:[1,28],31:[1,29],32:[1,30],37:[1,31],38:[1,32],52:[1,34],53:[1,33]},{56:[1,37]},{25:[1,38]},{25:[1,39]},{10:[2,36],19:[2,36],29:40,48:[2,36],49:[2,36],52:[2,36],53:[2,36],57:[1,41]},{15:[1,42]},{10:[1,48],19:[1,46],24:49,26:44,27:50,33:43,42:[1,45],45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{18:[1,53]},{28:[1,54]},{54:[1,55]},{14:[2,25],25:[2,25],30:[2,25],34:[2,25],39:[2,25],40:[2,25],41:[2,25],43:[2,25],44:[2,25],50:[2,25],51:[2,25],56:[2,25]},{19:[1,56]},{56:[1,57]},{18:[2,34],28:[2,34],31:[2,34],32:[2,34],37:[2,34],38:[2,34],52:[2,34],53:[2,34]},{10:[1,48],19:[1,46],24:49,26:58,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],19:[1,46],24:49,26:59,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],19:[1,46],24:49,26:60,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{58:[1,61]},{16:62,18:[1,19]},{34:[1,63]},{34:[2,11],39:[1,64],40:[1,65],41:[1,66],43:[2,11],44:[2,11],50:[1,67],51:[1,68]},{10:[1,48],19:[1,46],24:49,26:44,27:50,33:69,42:[1,45],45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{14:[2,16],30:[2,16],34:[2,16],39:[2,16],40:[2,16],41:[2,16],43:[2,16],44:[2,16],50:[2,16],51:[2,16],56:[2,16]},{14:[2,17],30:[2,17],34:[2,17],39:[2,17],40:[2,17],41:[2,17],43:[2,17],44:[2,17],50:[2,17],51:[2,17],56:[2,17]},{11:[1,70],14:[2,27],30:[2,27],34:[2,27],39:[2,27],40:[2,27],41:[2,27],43:[2,27],44:[2,27],50:[2,27],51:[2,27],56:[2,27]},{14:[2,19],30:[2,19],34:[2,19],39:[2,19],40:[2,19],41:[2,19],43:[2,19],44:[2,19],50:[2,19],51:[2,19],56:[2,19]},{14:[2,20],30:[2,20],34:[2,20],39:[2,20],40:[2,20],41:[2,20],43:[2,20],44:[2,20],50:[2,20],51:[2,20],56:[2,20]},{14:[2,21],30:[2,21],34:[2,21],39:[2,21],40:[2,21],41:[2,21],43:[2,21],44:[2,21],50:[2,21],51:[2,21],56:[2,21]},{14:[2,22],30:[2,22],34:[2,22],39:[2,22],40:[2,22],41:[2,22],43:[2,22],44:[2,22],50:[2,22],51:[2,22],56:[2,22]},{19:[1,71]},{19:[1,72]},{19:[1,73]},{15:[1,74]},{18:[2,35],28:[2,35],31:[2,35],32:[2,35],37:[2,35],38:[2,35],52:[2,35],53:[2,35]},{50:[1,67],51:[1,68],56:[2,4]},{50:[1,67],51:[1,68],56:[2,5]},{30:[1,75],50:[1,67],51:[1,68]},{10:[2,37],19:[2,37],48:[2,37],49:[2,37],52:[2,37],53:[2,37]},{56:[2,7]},{35:[1,76]},{10:[1,48],19:[1,46],24:49,26:77,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],19:[1,46],24:49,26:78,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],19:[1,46],24:49,26:79,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],19:[1,46],24:49,26:80,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],19:[1,46],24:49,26:81,27:50,45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{43:[1,82]},{10:[2,40],14:[2,40],19:[2,40],46:83,48:[2,40],49:[2,40],52:[2,40],53:[2,40]},{56:[2,9]},{56:[2,10]},{55:[1,84]},{22:[1,85]},{15:[1,86]},{15:[1,87]},{34:[2,12],43:[2,12],44:[2,12],50:[1,67],51:[1,68]},{34:[2,13],43:[2,13],44:[2,13],50:[1,67],51:[1,68]},{34:[2,14],43:[2,14],44:[2,14],50:[1,67],51:[1,68]},{14:[2,23],30:[2,23],34:[2,23],39:[2,23],40:[2,23],41:[2,23],43:[2,23],44:[2,23],51:[1,68],56:[2,23]},{14:[2,24],30:[2,24],34:[2,24],39:[2,24],40:[2,24],41:[2,24],43:[2,24],44:[2,24],50:[2,24],56:[2,24]},{10:[1,48],19:[1,46],24:49,26:44,27:50,33:88,42:[1,45],45:47,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{10:[1,48],14:[2,42],19:[1,46],24:49,26:90,27:50,45:47,47:89,48:[1,51],49:[1,52],52:[1,34],53:[1,33]},{14:[2,26],25:[2,26],30:[2,26],34:[2,26],39:[2,26],40:[2,26],41:[2,26],43:[2,26],44:[2,26],50:[2,26],51:[2,26],56:[2,26]},{17:[2,3],56:[2,3]},{16:91,18:[1,19]},{16:94,18:[1,19],23:93,24:26,27:27,28:[1,28],31:[1,29],32:[1,30],36:92,37:[1,31],38:[1,32],52:[1,34],53:[1,33]},{44:[1,95]},{14:[1,96]},{14:[2,43],34:[1,97],50:[1,67],51:[1,68]},{56:[2,6]},{56:[2,8]},{56:[2,38]},{56:[2,39]},{34:[2,15],43:[2,15],44:[2,15]},{14:[2,18],30:[2,18],34:[2,18],39:[2,18],40:[2,18],41:[2,18],43:[2,18],44:[2,18],50:[2,18],51:[2,18],56:[2,18]},{10:[2,41],14:[2,41],19:[2,41],48:[2,41],49:[2,41],52:[2,41],53:[2,41]}],
defaultActions: {3:[2,1],62:[2,7],71:[2,9],72:[2,10],91:[2,6],92:[2,8],93:[2,38],94:[2,39]},
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
lexer.options = {"flex":true,"case-insensitive":true};
lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START
switch($avoiding_name_collisions) {
case 0:/* ignore */
break;
case 1:return 19
break;
case 2:return 7
break;
case 3:return 8
break;
case 4:return 18
break;
case 5:return 20
break;
case 6:return 52
break;
case 7:return 53
break;
case 8:return 32
break;
case 9:return 35
break;
case 10:return 28
break;
case 11:return yy.bloop ? 'INVALID' : 'MU_LOOP'
break;
case 12:return 57
break;
case 13:return 58
break;
case 14:return 30
break;
case 15:return 38
break;
case 16:return 22
break;
case 17:return 37
break;
case 18:return 43
break;
case 19:return 49
break;
case 20:return 48
break;
case 21:return 10
break;
case 22:return 17
break;
case 23:return 9
break;
case 24:return 11
break;
case 25:return 14
break;
case 26:return 54
break;
case 27:return 55
break;
case 28:return 42
break;
case 29:return 44
break;
case 30:return 15
break;
case 31:return 56
break;
case 32:return 34
break;
case 33:return 50
break;
case 34:return 51
break;
case 35:return 51  //non-ascii
break;
case 36:return 25
break;
case 37:return 25 //non-ascii
break;
case 38:return 39
break;
case 39:return 40
break;
case 40:return 41
break;
case 41:return 5
break;
case 42:return 'INVALID'
break;
}
};
lexer.rules = [/^\s+/i,/^([1-9][0-9]+|[0-9])/i,/^DEFINE/i,/^PROCEDURE/i,/^BLOCK/i,/^BEGIN/i,/^OUTPUT/i,/^CELL/i,/^IF/i,/^THEN/i,/^LOOP/i,/^MU-LOOP/i,/^AT/i,/^MOST/i,/^TIMES/i,/^ABORT/i,/^END/i,/^QUIT/i,/^AND/i,/^YES/i,/^NO/i,/^[A-Z-]+\??/i,/^\./i,/^''/i,/^\[/i,/^\]/i,/^\(/i,/^\)/i,/^\{/i,/^\}/i,/^:/i,/^;/i,/^,/i,/^\+/i,/^\*/i,/^×/i,/^<=/i,/^⇐/i,/^</i,/^>/i,/^=/i,/^$/i,/^./i];
lexer.conditions = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}};
return lexer;})()
parser.lexer = lexer;
return parser;
})();
if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parse2;
exports.parse = function () { return parse2.parse.apply(parse2, arguments); }
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