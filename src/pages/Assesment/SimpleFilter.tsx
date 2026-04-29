import { useState } from "react";

const fields = [
    { key: "name", label: "Name", type: "text" },
    { key: "salary", label: "Salary", type: "number" },
    { key: "isActive", label: "Active", type: "boolean" }
];

const operators: any = {
    text: ["contains", "equals"],
    number: ["greater than", "less than"],
    boolean: ["is"]
};

export default function SimpleFilter() {
    const [filters, setFilters] = useState<any[]>([]);

    const addFilter = () => {
        setFilters([...filters, { field: "", operator: "", value: "" }]);
    };

    const update = (index: number, key: string, value: any) => {
        const copy = [...filters];
        copy[index][key] = value;
        setFilters(copy);
    };

    const remove = (index: number) => {
        setFilters(filters.filter((_, i) => i !== index));
    };

    console.log('filters', filters)

    return (
        <div className="container mt-4">
            <h5>Dynamic Filters</h5>

            {filters.map((f, i) => {
                const field = fields.find(x => x.key === f.field);

                return (
                    <div className="row g-2 align-items-center mb-2" key={i}>
                        {/* Field */}
                        <div className="col">
                            <select
                                className="form-select"
                                value={f.field}
                                onChange={e => update(i, "field", e.target.value)}
                            >
                                <option value="">Select Field</option>
                                {fields.map(f => (
                                    <option key={f.key} value={f.key}>
                                        {f.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Operator */}
                        {field && (
                            <div className="col">
                                <select
                                    className="form-select"
                                    value={f.operator}
                                    onChange={e => update(i, "operator", e.target.value)}
                                >
                                    <option value="">Operator</option>
                                    {operators[field.type].map((op: string) => (
                                        <option key={op} value={op}>
                                            {op}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Value */}
                        {field?.type === "text" && (
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Enter text"
                                    value={f.value}
                                    onChange={e => update(i, "value", e.target.value)}
                                />
                            </div>
                        )}

                        {field?.type === "number" && (
                            <div className="col">
                                <input
                                    type="number"
                                    className="form-control"
                                    value={f.value}
                                    onChange={e => update(i, "value", e.target.value)}
                                />
                            </div>
                        )}

                        {field?.type === "boolean" && (
                            <div className="col">
                                <select
                                    className="form-select"
                                    value={f.value}
                                    onChange={e => update(i, "value", e.target.value === "true")}
                                >
                                    <option value="">Select</option>
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                </select>
                            </div>
                        )}

                        {/* Remove */}
                        <div className="col-auto">
                            <button
                                className="btn btn-danger"
                                onClick={() => remove(i)}
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                );
            })}

            <button className="btn btn-primary mt-3" onClick={addFilter}>
                Add Filter
            </button>
        </div>
    );
}
