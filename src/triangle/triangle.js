const triangle = (conf) => {
    const size = {
        get value() {
            return 5;
        }
    };

    const vertices = {
        elements: [],
        get value() {
            return vertices;
        },
        set value(value) {
            elements = value;
        }
    };

    vertices.value = conf.vertices;

    return {
        size: size.value
    };
};

export { triangle };