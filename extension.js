// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    function createLottieData() {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const text = editor.document.getText();
            try {
                return JSON.parse(text);
            } catch (e) {
                console.error(e);
                vscode.window.showErrorMessage('Could not parse this lottie file.');
            }
        }
	}
	
	const htmlPath = path.resolve(context.extensionPath, './webview/index.html');
  	const indexUri = vscode.Uri.file(htmlPath);
    
    vscode.workspace.onDidChangeTextDocument((e) => {
        if (e.document === vscode.window.activeTextEditor.document) {
			const data = createLottieData();
			vscode.commands.executeCommand('_workbench.htmlPreview.postMessage', indexUri, {
				type: 'update',
				data,
			});
        }
		// if (e.document === vscode.window.activeTextEditor.document) {
		// 	provider.update(previewUri);
		// }
	});

	// vscode.window.onDidChangeTextEditorSelection((e) => {
    //     console.log('ah?');
	// });


    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.lottieView', function () {
        // console.log('command called');
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        // console.log('editor', editor);

        // Display a message box to the user
		// vscode.window.showInformationMessage('Hello World!');
		
        return vscode.commands.executeCommand('vscode.previewHtml', indexUri, vscode.ViewColumn.Two, 'Lottie Viewer', {
			allowScripts: true,
		}).then((success) => {
			const data = createLottieData();
			vscode.commands.executeCommand('_workbench.htmlPreview.postMessage', indexUri, {
				type: 'init',
				data,
			});
		}, (reason) => {
			vscode.window.showErrorMessage(reason);
		});
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;