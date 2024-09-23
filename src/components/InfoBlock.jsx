
const books =[
    { title:"1984" , author:"George Orwell"},
    { title :"To Kill a Mockinbird ", author :"Harper Lee"},
    { title :"The Great Gatsby ", author:"F. Scott Fitzegerland "},
    { title:"Moby Dick ", author : "Herman Melville"},

];
const InfoBlock = () => {
    return (
        <div className="p-8 bg-green-50">
            <h2 className="text-3xl font-bold mb-4 text-green-700">
                Featured Books
            </h2>
            <div className="grid grid-cols-1 md:grid-cols3-2 lg:grid-cols-4 gap-6">
                {books.map((books,index) => (
                    <div key={index} className="border rounded-lg shadow-lg overflow-hidden bg-white">
                          <div className="p-4">
                            <h3 className="text-xl font-semibold text-green-600">{books.title}</h3>
                            <p className="text-grey-600" >by {books.author}</p>
                          </div>
                    </div>  
                ))}   
                 
            </div>
        </div>

       
    );
}

export default InfoBlock;