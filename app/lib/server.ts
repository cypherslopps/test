import { Proposals } from "@/typings";
import { proposals } from "./constants";
import { flattenObject } from "./utils";
// import toast from "react-hot-toast";

export function getProposal(slug: string) {
    const proposal = flattenObject(proposals).filter(proposal => proposal.slug === slug)[0];
        
    return proposal;
}

export async function fetchAllCountries() {
    try {
      var headers = new Headers();
      headers.append("X-CSCAPI-KEY", process.env.NEXT_PUBLIC_COUNTRY_API);
      
      var requestOptions: RequestInit = {
         method: 'GET',
         headers: headers,
         redirect: 'follow'
      };
      
      const response = await fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
      const countries = await response.json();

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