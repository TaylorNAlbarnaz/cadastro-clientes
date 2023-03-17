export function format(value, pattern) {
    let i = 0;
    const v = value.toString();

    if (value == '' || value == null) {
        return value;
    }

    return pattern.replace(/#/g, _ => v[i++]);
}