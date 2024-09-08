export type  NodeType =  
//STATEMENTS
| "Program" 
| "VarDeclaration"


//EXPRESSIONS
| "AssignmentExpr"
| "NumericLiteral" 
| "Identifier" 
| "BinaryExpr";


//Statements don't return a value 
export interface Stmt {
    kind: NodeType;
}

// How one of our nodes will look like
export interface Program extends Stmt {
    kind : "Program";
    body: Stmt[];
}

export interface VarDeclaration extends Stmt {
    kind : "VarDeclaration";
    constant: boolean, 
    identifier: string,
    value?: Expr,

}

export interface Expr extends Stmt {}

export interface AssignmentExpr extends Expr {
    kind: "AssignmentExpr";
    assigne: Expr;
    value: Expr;
}

export interface BinaryExpr extends Expr {
    kind: "BinaryExpr";
    left: Expr;
    right: Expr;
    operator: string;
}

export interface Identifier extends Expr {
    kind: "Identifier";
    symbol: string;
}

export interface NumericLiteral extends Expr {
    kind: "NumericLiteral";
    value: number;
}
