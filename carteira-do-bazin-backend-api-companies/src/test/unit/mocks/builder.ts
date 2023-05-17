class Builder<T> {
    static ctor = undefined;
    static propertyNames: Array<string> = undefined;

    protected properties = {};

    build(): T {
        const builderDef = Object.getPrototypeOf(this).constructor;
        const instance = new builderDef.ctor();
        for (const prop of builderDef.propertyNames) {
            instance[prop] = this.properties[prop];
        }
        return instance;
    }
}

const builderRegistry = {};

function createBuilder<T>(ctor: Function) {
    const clz = class extends Builder<T> {};
    clz.ctor = ctor.constructor;
    clz.propertyNames = [];
    return clz;
}

export function getBuilder<T>(ctor: { new (): T }): any {
    const builder = builderRegistry[ctor.name];
    return builder;
}

export function buildable(name?: string) {
    return function (target: any, propertyKey: string | symbol) {
        const className = target.constructor.name;
        if (!builderRegistry[className]) {
            builderRegistry[className] = createBuilder(target);
        }

        const builderFunctionName = name || propertyKey;
        const builder = builderRegistry[className];
        builder.prototype[builderFunctionName] = function (value: any) {
            this.properties[propertyKey] = value;
            return this;
        };
        builder.propertyNames.push(propertyKey);
    };
}
