const compose = (...func) => (comp) => {
    return func.reduceRight(
        (wrapped, fun) => fun(wrapped), comp
    )
}

export default compose