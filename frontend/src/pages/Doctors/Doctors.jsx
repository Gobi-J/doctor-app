import { useEffect, useState } from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [newDoc, setNewDoc] = useState(doctors);

  const handleSearch = () => {
    setQuery(query.trim());
  };

  useEffect(() => {
    console.log(query);
    if (query === "") {
      setNewDoc(doctors);
      return;
    }
    const newD = doctors.filter(
      (doc) =>
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(query.toLowerCase())
    );
    setNewDoc(newD);
  }, [query]);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search doctor by name or specifiication"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
    gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"
          >
            {newDoc.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say?</h2>

            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
