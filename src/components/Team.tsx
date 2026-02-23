

import { TEAM_MEMBERS } from "../constants";
 function Team () {
    return(

        <section className="container mx-auto px-8 py-8" id="team">
            <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">Team</h2>
            <div className="flex flex-wrap">
                {
                    TEAM_MEMBERS.map((member, index) => (
                        <div className="mb-12 flex w-full flex-col items-center px-4 text-center md:w-1/2 lg:w-1/3">
                            <img src={member.image} alt={member.name} className="rounded-full w-32 h-32  mb-4" />
                            <h3 className="md:text-xl font-semibold tracking-tighter">{member.name}</h3>
                            <p className="italic md:text-lg">{member.title}</p>
                        </div>
                    ))
                }

            </div>

        </section>
    )
 }


  export default Team;