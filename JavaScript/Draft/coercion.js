/*
Coercion:Type conversion
Implicit: JS engine automatically converts the type
Explicit: We manually convert the type
In JavaScript, types are associated with values not variables.

Abstract Operation: Operations that are not directly specified by the language but are implied by the specification. For example, the addition operator + is not specified for boolean operands, but the specification for addition implies that x + y is equivalent to ToNumber(x) + ToNumber(y) if either x or y is a boolean value. The operation ToNumber is an abstract operation.

ToPrimitive: ToPrimitive(input, PreferredType?)
input: An ECMAScript language value.
ToPrimitive converts its input argument to a non-Object type. If the PreferredType was not supplied, hint is "default". 

If the input argument is already a non-Object type, return it as-is.
If the input argument is an object, then it can be converted to more than one primitive type, then the function ues preferred type argument to decide which primitive type to return.

Steps:
1. Assert input
2. If PreferredType was not passed, let hint be "default".
3. Else if PreferredType is hint String, let hint be "string".
4. Else PreferredType is hint Number, let hint be "number".
5. After the above steps, if hint is default, let hint be "number".
6. Return OrdinaryToPrimitive(input, hint).
hint: A String value specifying the desired type of the result. The following values are possible:

ToPrimitive: ToPrimitive(input, PreferredType?)
input: An ECMAScript language value.
1. If input is an Object, then
       a. Let exoticToPrim be ? GetMethod(input, @@toPrimitive).
         b. If exoticToPrim is not undefined, then
              i. Let result be ? Call(exoticToPrim, input, « hint »).
              ii. If Type(result) is not Object, return result.
              iii. Throw a TypeError exception.
2. If PreferredType is not present, let hint be "default".
3. Else if PreferredType is hint String, let hint be "string".
4. Else PreferredType is hint Number, let hint be "number".
5. Assert: hint is either "string" or "number".
6. Return OrdinaryToPrimitive(input, hint).



OrdinaryToPrimitive: OrdinaryToPrimitive(O, hint)
1. Assert: Type(O) is Object
2. Assert: Type(hint) is String and its value is either "string" or "number".
3. If hint is "string", then
    a. Let methodNames be «"toString", "valueOf"».
4. Else,
    a. Let methodNames be «"valueOf", "toString"».
5. For each name in methodNames in List order, do
    a. Let method be ? Get(O, name).
    b. If IsCallable(method) is true, then
        i. Let result be ? Call(method, O).
        ii. If Type(result) is not Object, return result.
6. Throw a TypeError exception.

If hint/preferredType is number then on our input argument , we call valueOf() method first and if it returns a primitive value then we return it otherwise we call toString() method and return the primitive value it returns.

If hint/preferredType is string then on our input argument , we call toString() method first and if it returns a primitive value then we return it otherwise we call valueOf() method and return the primitive value it returns.

If the input argument is already a non-Object type, return it as-is.



*ToNumber: ToNumber(argument)
Whenever we use a non-number value in a place that expects a number, the JavaScript engine will attempt to convert that value to a number. 

""=>0
"0"=>0
"-0"=>-0
" 009"=>9
"3.14159"=>3.14159
"0."=>0
".0"=>0
"."=>NaN
"0xaf"=>175
"0X1A"=>26
"true"=>1
"false"=>0
"null"=>0
"undefined"=>NaN
"Infinity"=>Infinity
"-Infinity"=>-Infinity
"123e-1"=>12.3
"10+20"=>NaN
"32px"=>NaN
"abc"=>NaN

ToBoolean: ToBoolean(argument)
whenever we use a non-boolean value in a place that expects a boolean, the JavaScript engine will attempt to convert that value to a boolean.
""=>false
"0"=>true
"-0"=>true
" 009"=>true
"3.14159"=>true
"0."=>false
".0"=>false
"."=>false
"0xaf"=>true
"0X1A"=>true
"true"=>true
"false"=>false
"null"=>false
"undefined"=>false
"Infinity"=>true
"-Infinity"=>true
"123e-1"=>true
"10+20"=>true
"32px"=>true

ToString: ToString(argument)
Whenever we use a non-string value in a place that expects a string, the JavaScript engine will attempt to convert that value to a string.
If in an expression, one of the operands is a string, JavaScript will convert the other operand to a string and concatenate the two.

""=>""
"0"=>"0"
"-0"=>"0"
" 009"=>" 009"
"3.14159"=>"3.14159"
"0."=>"0."
".0"=>".0"
".""=>"."
"0xaf"=>"0xaf"
"0X1A"=>"0X1A"
"true"=>"true"
"false"=>"false"
"null"=>"null"
"undefined"=>"undefined"
"Infinity"=>"Infinity"
"-Infinity"=>"-Infinity"
"123e-1"=>"12.3"
"10+20"=>"10+20"
"32px"=>"32px"

ToPrimitive: ToPrimitive(argument)

""=>""
"0"=>"0"
"-0"=>"-0"
" 009"=>" 009"
"3.14159"=>"3.14159"
"0."=>"0."
".0"=>".0"
".""=>"."
"0xaf"=>175
"0X1A"=>26
"true"=>true
"false"=>false
"null"=>null
"undefined"=>undefined
"Infinity"=>Infinity
"-Infinity"=>-Infinity
"123e-1"=>12.3
"10+20"=>"10+20"
"32px"=>"32px"

ToObject: ToObject(argument)
Whenever we use a non-object value in a place that expects an object, the JavaScript engine will attempt to convert that value to an object.
""=>String
"0"=>Number
"-0"=>Number
" 009"=>Number
"3.14159"=>Number
"0."=>Number
".0"=>Number
".""=>String
"0xaf"=>Number
"0X1A"=>Number
"true"=>Boolean
"false"=>Boolean
"null"=>Null
"undefined"=>Undefined
"Infinity"=>Number
"-Infinity"=>Number
"123e-1"=>Number
"10+20"=>String
"32px"=>String

ToInteger: ToInteger(argument)
Whenever we use a non-integer number value in a place that expects an integer number, the JavaScript engine will attempt to convert that value to an integer number.
""=>0
"0"=>0
"-0"=>0
" 009"=>9
"3.14159"=>3
"0."=>0
".0"=>0
".""=>0
"0xaf"=>175
"0X1A"=>26
"true"=>1
"false"=>0
"null"=>0
"undefined"=>NaN
"Infinity"=>Infinity
"-Infinity"=>-Infinity
"123e-1"=>12
"10+20"=>NaN
"32px"=>NaN

*/
//INCOMPLETE