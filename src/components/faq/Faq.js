import {BsJournalBookmark} from "react-icons/bs"
import "./Faq.css"

const Faq = () =>{
    return(
        <section className="faq_sec">
            <div className="container faq">
                <div className="title">
                    <BsJournalBookmark size={30} color="green"/>
                    <h2 className="faqs_title">FAQS</h2>
                    <p className="text">Cras a risus risus. Cras viverra dolor ac ante molestie consequat. Vivamus in commodo lorem. Nunc pellentesque et nunc vel laoreet. Aliquam iaculis ligula a libero sodales, in faucibus orci tempus. Donec fringilla commodo nisi, at sagittis massa. Aliquam eu dolor placerat, commodo risus eget, placerat turpis. Nulla facilisi.</p>
                </div>
            </div>
        </section>
    )
}

export default Faq;