import { Proposals } from "@/typings";
import { proposals } from "./constants";
import { flattenObject } from "./utils";
import toast from "react-hot-toast";

export function getProposal(slug: string) {
    const proposal = flattenObject(proposals).filter(proposal => proposal.slug === slug)[0];
        
    return proposal;
}

export async function fetchAllCountries() {
    try {
        const response = await fetch('http://api.geonames.org/countryInfo?username=cyphersloops'); 
        let responseType = await response.text();
        let countries = new window.DOMParser().parseFromString(responseType, "text/xml");
        console.log(countries, "fetched countries");
        return countries;
      } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
      }
}

// function submitProposal(data: Proposals) {
//   const isValid: boolean = Object.values(data).every(value => Boolean(value));

//   if(!isValid) {
//       if(!data.title) 
//           setTitleError("Title can't be empty");
//       else 
//           setTitleError("");

//       if(!isArticleUpdated) 
//           setDescriptionError("Description can't be empty");
//       else 
//           setDescriptionError("");

//       if(!data.discussion)
//           setDiscussionError("Discussion can't be empty");
//       else
//           setDiscussionError(""); 

//       setTimeout(() => toast.error("Add a proposal"), 500);
//   } else {
//       try {
//           // Set user proposal
//           setNewProposal(proposal);

//           router.push("/dashboard/proposals/preview");
//       } catch(error) {
//           console.log(error)
//       }
//   }  
// } 