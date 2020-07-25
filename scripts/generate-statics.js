const fs = require('fs');

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFileList = dir => {
    const files = fs.readdirSync(dir)

    let filelist = []

    files.forEach(file => {
        const fileJson = fs.readFileSync(`${dir}${file}`, 'utf-8')
        filelist.push(fileJson)
    });

    return filelist
}

/**
 * Write blogs json file
 */
const writeAllBlogs = async () => {
    const fileArray = await getFileList('./public/posts/');
    const jsonContent = await JSON.stringify(fileArray);
    fs.writeFile('public/all-posts.json', jsonContent, err => {
        if (err) throw new Error(err)
    })
}

/**
 * Write things json file
 */
const writeAllThings = async () => {
    const fileArray = await getFileList('./public/things/');
    const jsonContent = await JSON.stringify(fileArray);
    fs.writeFile('public/all-things.json', jsonContent, err => {
        if (err) throw new Error(err)
    })
}

writeAllBlogs();
writeAllThings();