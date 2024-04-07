const fs = require('fs')

class File {
  constructor(name, completePath) {
    this.name = name
    this.completePath = completePath
  }
}

class PlainToJson {
  constructor(relPath) {
    this.json = { header: '', data: [] }
    this.relPath = relPath
  }

  getAllFiles() {
    const files = []
    const fileList = fs.readdirSync(__dirname + this.relPath)
    for (const fileName of fileList) {
      const completePath = `${__dirname + this.relPath}/${fileName}`
      files.push(new File(fileName, completePath))
    }
    return files
  }

  contentToJson(file) {
    const doc = fs.readFileSync(file.completePath, 'utf8')
    const json = { header: '', data: [], date: convertStringToDate(file.name) }
    doc.split('\n').forEach((line, index) => {
      if (index === 0) {
        json.header = line
      } else {
        json.data.push(line)
      }
    })

    return json
  }
}

function convertStringToDate(inputString) {
  // Split the input string using '_' as the delimiter
  const dateParts = inputString.split('_')

  // Extract year, month, and day from the array
  const year = parseInt(dateParts[0])
  const month = parseInt(dateParts[1]) - 1 // Month is 0-indexed in JavaScript
  const day = parseInt(dateParts[2])

  return new Date(year, month, day)
}

function formatAsLocaleDateString(date) {
  const options = {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  return date.toLocaleDateString('de-DE', options)
}

function writeJsonToFile(json, file,completePath) {
  const fileName = file.name;

  fs.writeFile(completePath + fileName + '.json', json, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`File '${completePath + fileName + '.json'}' has been successfully written.`);
    }
  });
}

const convert = new PlainToJson('/gettoknow')
const files = convert.getAllFiles()
files.forEach((file) => {
  const json = convert.contentToJson(file)
  console.log(json, file)
  writeJsonToFile(JSON.stringify(json), file, __dirname + '/../src/assets/gettoknow/');
})
