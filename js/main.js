inputArea = document.getElementsByName("searchTerm")
searchBar = document.getElementsByClassName("searchBar")
test = document.getElementById("test")

document.getElementById('searchTerm').addEventListener('focus', function() {
    document.getElementById("searchBar").style.boxShadow = "0 1px 6px rgba(32,33,36,.28)";
});
