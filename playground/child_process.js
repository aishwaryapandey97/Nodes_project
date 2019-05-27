const {execSync} = require('child_process');

try{
    const result = execSync(`du -sh "C:\Users\hp\desktop\Nodes\static\code
"`).toString();
    console.log(result);
}catch(err){
    console.log(`Error: ${err}`);
}