// Example JavaScript code for the Sample Website

// This function displays a message when the user clicks on a link
function handleClick(event) {
	event.preventDefault();
	alert("You clicked on a link!");
}

// This code adds an event listener to all links on the page
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener("click", handleClick);
}
