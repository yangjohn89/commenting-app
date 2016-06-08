function getMessage() {
	//get value from user
	var userName = document.getElementById('username').value
	var userText = document.getElementById('text').value
	//convert those value to text that show on screen
	var listName = document.createTextNode(userName)
	var listText = document.createTextNode(userText)

	var newList = document.createElement('li')
	newList.className = 'list-group-item'
	var newDiv = document.createElement('div')
	var newh4 = document.createElement('h4')
	var newDate = document.createElement('p')
	console.log(newDate)
	newDate.className = 'currentdate'
	var newp = document.createElement('p')
	var messageList = document.getElementById('messagelist')
	//newp.appendChild(listName)
	newh4.appendChild(listName)
	newDiv.appendChild(newh4)
	newList.appendChild(newDiv)
	messageList.appendChild(newList)

	newp.appendChild(listText)
	newDiv.appendChild(newp)
	newList.appendChild(newDiv)
	messageList.appendChild(newList)

	newDate.setAttribute('id', 'currentdateId')
	newDate.innerHTML = new Date();
	newDiv.appendChild(newDate)

    newList.appendChild(newDiv)
	messageList.appendChild(newList)

	


	
	

	



}