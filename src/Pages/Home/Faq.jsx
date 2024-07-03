

const Faq = () => {
    return (
        <div className="mt-40">
            <a className="btn text-[#020043] text-xs md:text-lg hover:bg-[#020043] hover:text-white font-medium border-[#020043] bg-transparent  rounded-3xl mb-4">Service</a>
            <h1 className="text-4xl font-semibold mb-4">Frequntly Asked Question</h1>
            <div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl bg-[#FFFFF5] font-medium"> What are your office hours?</div>
                    <div className="collapse-content">
                        <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl bg-[#FFFFF5] font-medium">How can I schedule an appointment?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl bg-[#FFFFF5] font-medium">Do you accept insurance?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl bg-[#FFFFF5] font-medium">What should I bring to my appointment?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-white">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl bg-[#FFFFF5] font-medium">Do you offer telemedicine appointments?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;