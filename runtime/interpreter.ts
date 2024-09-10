import { ValueType, RuntimeVal, NumberVal, MK_NULL} from './values.ts';
import { AssignmentExpr, BinaryExpr, Identifier, NodeType, NumericLiteral, ObjectLiteral, Program, Stmt, VarDeclaration } from '../frontend/ast.ts';
import Environment from './environment.ts';
import { eval_identifier, evaluate_binary_expr, eval_numeric_binary_expr, eval_assignment, eval_object_expr } from './eval/expressions.ts';
import { eval_program, eval_var_declaration } from './eval/statements.ts';


export function evaluate (astNode: Stmt, env: Environment): RuntimeVal {

    switch (astNode.kind) {
        case "NumericLiteral":
            return {value:( (astNode as NumericLiteral).value), type: "number",} as NumberVal;

        case "Identifier":
            return eval_identifier(astNode as Identifier, env);

        case "ObjectLiteral":
            return eval_object_expr(astNode as ObjectLiteral, env);
            
        case "AssignmentExpr":
            return eval_assignment(astNode as AssignmentExpr, env);
        case "BinaryExpr":
            return evaluate_binary_expr(astNode as BinaryExpr, env);
        case "Program":
            return eval_program(astNode as Program, env);

        case "VarDeclaration":
            return eval_var_declaration(astNode as VarDeclaration, env);
    
        // Handle unimplimented ast types as error.
        default:
            console.error("This AST node hasn't been set up for interpretation.", astNode);
            Deno.exit(0);
    }
}

