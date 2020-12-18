import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Please provide a name for your order"),
    email: yup
    .string()
    .email("Must be a valid email address")
    .required(),
    pizzaSize: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'exlarge'], "Size is required"),
    sauce: yup
    .string()
    .oneOf(['Original Red', 'Alfredo', 'Garlic Ranch', 'Buffalo','BBQ', 'No Sauce'], "Sauce is required"),
    pepperoni: yup
    .boolean(),
    sausage: yup
    .boolean(),
    bacon: yup
    .boolean(),
    spicySausage: yup
    .boolean(),
    grilledChicken: yup
    .boolean(),
    redOnion: yup
    .boolean(),
    dicedWhiteOnion: yup
    .boolean(),
    greenPepper: yup
    .boolean(),
    dicedTomatoes: yup
    .boolean(),
    blackOlives: yup
    .boolean(),
    artichokeHearts: yup
    .boolean(),
    pineapple: yup
    .boolean(),
    substitute: yup
    .boolean(),
    quantity: yup
    .number()
    .min(1, "minimum order is 1")
    .max(10, "maximum order is 10"),
    instructions: yup
    .string()
    
});