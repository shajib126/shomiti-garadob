import React from "react";
import "./Home.css";
import photo1 from '../../assets/photo1.jpg'
import photo2 from '../../assets/photo2.jpg'
import photo3 from '../../assets/photo3.jpg'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'
const memberData = [
  {
    name: "সোহেল",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "রকুনুজ্জামান",
    image:
      "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "হাসিবুল হক",
    image:
      "https://media.istockphoto.com/id/637234116/photo/doing-it-for-the-love-of-success.jpg?s=612x612&w=0&k=20&c=aAb3V2diocnkHeQ8ZweS1tJkoDBRN1XWBgh-heOVvHo=",
  },
];
const Home = () => {
  return (
    <>
    <div className="home">
      <div className="home_title">
        <h2>গাড়াডোব সমব্যায় সমিতী</h2>
        <h4>চাষী,কৃষকের পাশে সবসময়</h4>
      </div>
      <div className="ourMember">
        {memberData?.map((member) => (
          <div className="member_details">
            <h4>{member.name}</h4>
            <img src={member.image} alt={member.image} />
          </div>
        ))}
      </div>
    </div>
    <div className="our_service">
            <h2>আমাদের সার্ভিস</h2>
            <span className="border"><hr /></span>
            <ol>
                <li>ঋন প্রদান করা</li>
                <li>সঞ্চয় গ্রহন করা</li>
                <li>ঋন প্রদান করা</li>
                <li>সঞ্চয় গ্রহন করা</li>
                <li></li>
            </ol>
    </div>
    <div className="our_events">
        <img src={photo1} alt="" />
        <img src={photo2} alt="" />
        <img src={photo3} alt="" />
        <img src={photo4} alt="" />
        <img src={photo5} alt="" />
    </div>
    </>
  );
};

export default Home;
