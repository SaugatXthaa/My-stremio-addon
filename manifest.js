const manifest = {
    id: "community.youraddon.name",
    version: "1.0.0",
    name: "My Addon",
    description: "Multi-source provider",
    resources: ["stream"], // Resources must be an array
    types: ["movie", "series"], // Types must be an array
    catalogs: [], // <--- THIS MUST BE AN EMPTY ARRAY LIKE THIS
    idPrefixes: ["tt"]
};
