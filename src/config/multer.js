const multer = require('multer');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');

const multerConfig = { 
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const allowedDocumentTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.docx', '.doc'];
            const fileExtension = path.extname(file.originalname).toLowerCase();
            let folder; 

            if (allowedDocumentTypes.includes(fileExtension)) {
                folder = path.resolve(__dirname, '..', 'anexos', 'docs');
            } else {
                throw new Error("Tipo de documento não suportado");
            }

            fs.mkdirSync(folder, { recursive: true });
            cb(null, folder);

        },
        filename: (req, file, cb) => {
            const fileExtension = path.extname(file.originalname).toLowerCase().replace('.', '');
            const uid_file = uuid.v4();
            const fileName = `${uid_file}.${fileExtension}`;
            req.dataFile = { uid_file, fileExtension};
            cb(null, fileName);
        }
    }),
    limits: {
        fileSize: 20 * 1024 * 1024, // 10 MB
    }, 
    fileFilter: (req, file, cb) => {
        const allowedDocumentTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.docx', '.doc'];
        const fileExtension = path.extname(file.originalname).toLowerCase();

        if (allowedDocumentTypes.includes(fileExtension)) {
            cb(null, true);
        } else {
            cb(new Error("Tipo de documento não suportado"));
        }
    }
}

module.exports = multerConfig;
