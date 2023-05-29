const path = require("path");

const uploadSingleFile = async (fileObject) => {
    console.log(fileObject.name);
    let uploadPath =path.resolve(__dirname ,"../public/image");
    const fileBaseName = path.basename(fileObject.name);
    const fileExtName = path.extname(fileObject.name);
    uploadPath = `${uploadPath}/${fileBaseName}_${Date.now()}.${fileExtName}`;
    // Use the mv() method to place the file somewhere on your server
    try {
        await fileObject.mv(uploadPath);
        return {
            status: "success",
            error: null,
            path: uploadPath
        };
    } catch (err) {
        return {
            status: "failed",
            error: JSON.stringify(err)
        };
    }
}
//     fileObject.mv(uploadPath, function (err) {
//         if (err) {
//             return {
//                 status: "failed",
//                 error: JSON.stringify(err),
//                 path: uploadPath
//             };
//         }
//         return {
//             status: "success",
//             error: null,
//             path: uploadPath
//         };
//     });
// }

const uploadMutipleFiles = async (fileObjects) => {
    let result = [];
    for (let file of fileObjects) {
        let uploadPath =path.resolve(__dirname ,"../public/image");
        const fileBaseName = path.basename(file.name);
        const fileExtName = path.extname(file.name);
        uploadPath = `${uploadPath}/${fileBaseName}_${Date.now()}.${fileExtName}`;
        console.log(uploadPath);
        // Use the mv() method to place the file somewhere on your server
        try {
            await file.mv(uploadPath);
            result.push({
                status: "success",
                error: null,
                path: uploadPath
                }
            );
        } catch (err) {
            result.push(
                {
                    status: "failed",
                    error: JSON.stringify(err),
                }
            );
        }
    }
    return result;
}
module.exports = {uploadSingleFile,uploadMutipleFiles};