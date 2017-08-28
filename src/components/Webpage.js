import React from 'react'
import FillerText from './FillerText.js'


class Webpage extends React.Component{
	render(){
		return(<div>
			<title><h1>The world's coolest webpage</h1></title>
			<FillerText/>
			<FillerText/>
			</div>
		)
	}
}

export default Webpage





// ## Webpage
// 1. In the `components/Webpage.js` file, create a React component called `Webpage`.
// 2. This component should contain a title with the text `The world's coolest webpage`.
// 3. This component should also contain _two_ instances of the `FillerText` component.