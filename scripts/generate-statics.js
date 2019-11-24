const fs = require('fs');

/**
 * getFiles - Get list of files in directory
 * @param {string} dir
 * @returns {Array} Array of objects
 */
const getFiles = dir => {
    const files = fs.readdirSync(dir)

    let filelist = []

    files.forEach(file => {
        const fileJson = fs.readFileSync(`src/static/posts/${file}`, 'utf-8')
        filelist.push(fileJson)
    });

    return filelist
}

/**
 * Write blogs json file
 */
const writeBlogs = async () => {
    const fileArray = await getFiles('./src/static/posts/');
    const jsonContent = await JSON.stringify(fileArray);
    fs.writeFile('src/static/all-posts.json', jsonContent, err => {
        if (err) throw new Error(err)
    })
}

writeBlogs();