const SectionTitle = ({heading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto mb-10 mt-2">
            <h3 className="text-black font-semibold text-5xl  mb-2">
                {heading}
            </h3>
        </div>
    );
};

export default SectionTitle;