const root = {
    name: 'name',
    type: 'folder',
    children: [
        {
            name: 'folder 1',
            type: 'folder',
            children: [
                {
                    name: 'folder 2',
                    type: 'folder',
                    children: [
                        { name: 'file 3', type: 'file', size: 30 }
                    ]
                }
            ]
        },
        { name: 'file 1', type: 'file', size: 10 },
        { name: 'file 2', type: 'file', size: 20 }
    ]
};

function findFiles(node) {
    let files = [];

    if (node.type === 'file') {
        files.push(node.name);
    }

    if (node.children) {
        for (const child of node.children) {
            files = files.concat(findFiles(child));
        }
    }

    return files;
}

const fileNames = findFiles(root);
console.log(fileNames);
