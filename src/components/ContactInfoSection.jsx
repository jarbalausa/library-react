

const ContactInfoSection = () => {
    return (
        <div className="bg-gray-800 text-white p-6">
           <div className="text-center mb-4">
               <h3 className="text-2xl font-bold">Library</h3>
               <p className="mt-2">Welcome to the Chemistry Library. This Living Library is a principal hub of the LibreTexts project, which is a multi-institutional collaborative venture to develop the next generation of open-access texts to improve postsecondary education at all levels of higher learning. The LibreTexts approach is highly collaborative where an Open Access textbook environment is under constant revision by students, faculty, and outside experts to supplant conventional paper-based books
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center justify-center sm:flex-col">
                 <div  >
                    <h4 className="font-bold">
                      Mail
                    </h4>
                 </div>
                 <div className="font-bold" >
                     Phone
                 </div>
                 <div className="font-bold">
                    Address
                 </div>
               </div>
            </div>

        </div>
    );
};

export default ContactInfoSection;