import React, { useEffect } from "react"

import { exec } from "child_process"

const CreateFile = () => {

	const createYourFile = () => {
		exec(
			"cd ~/Desktop && touch yourFile.txt",
			(error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`)
					return
				}
				console.log(`stdout: ${stdout}`)
			}
		)
	}


	return (
		<div>
			<h1>Create File</h1>
			<p>Creates a file on the desktop</p>
      <button onClick={createYourFile}>Create File</button>
		</div>
	)
}
export default CreateFile
