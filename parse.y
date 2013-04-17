%{
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

%}

%nonassoc '+'
%nonassoc '*'

%%

program
  : procedures EOF
    { return Program({},[$1]) }
  ;

procedures
  : procedures procedure -> ($1.push($2), $1)
  |                      -> []
  ;

procedure
  : DEFINE PROCEDURE "''" IDENT "''" '[' parameters ']' ':' block '.'
    -> ProcedureStmt({name:$4},[$7,$10])
  ;

parameters
  : parameters ',' identifier -> ($1.push($3), $1)
  | identifier                -> [$1]
  ;

block
  : BLOCK NUMBER ':' BEGIN statements BLOCK NUMBER ':' END
    -> BlockStmt({id: $2},[$5])
  ;

statements
  : statements statement ';' -> ($1.push($3), $1)
  | statement ';'            -> [$1]
  ;

statement
  : cell '<=' expression                    -> AssignStmt({}, [$1, $3])
  | output '<=' expression                  -> AssignStmt({}, [$1, $3])
  | LOOP expression TIMES ':' block         -> LoopStmt({}, [$2, $5])
  | LOOP AT MOST expression TIMES ':' block -> LoopStmt({}, [$4, $7])
  | MU_LOOP ':' block                       -> MuLoopStmt({}, [$3])
  | IF condition ',' THEN ':' statement     -> IfThenStmt({}, [$2, $6])
  | IF condition ',' THEN ':' block         -> IfThenStmt({}, [$2, $6])
  | QUIT BLOCK NUMBER                       -> QuitStmt({id: $3})
  | ABORT LOOP NUMBER                       -> AbortStmt({id: $3})
  ;

condition
  : expression
  | expression '<' expression       -> LessCond({}, [$1, $3])
  | expression '>' expression       -> GreaterCond({}, [$1, $3])
  | expression '=' expression       -> EqualCond({}, [$1, $3])
  | '{' condition AND condition '}' -> CompoundCond({}, [$1, $3])
  ;

expression
  : NUMBER                    -> NumberLit({value: $1}, [], @1)
  | identifier
  | IDENT '[' arguments ']'   -> ApplyExpr({name:$1}, $3)
  | cell
  | output
  | NO                        -> BooleanLit({value: false}, [], @1)
  | YES                       -> BooleanLit({value: true}, [], @1)
  | expression '+' expression -> PlusExpr({}, [$1, $3])
  | expression '*' expression -> TimesExpr({}, [$1, $3])
  ;

output
  : OUTPUT -> OutputExpr({},[],@1)
  ;

cell
  : CELL '(' NUMBER ')' -> CellExpr({id: $3})
  ;

arguments
  : arguments ',' expression -> ($1.push($3), $1)
  | expression               -> [$1]
  ;

identifier
  : IDENT -> Identifier({value: $1},@1)
  ;
