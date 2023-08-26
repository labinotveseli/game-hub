import Like from "./components/Like";
import { produce } from "immer";

export default function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}

//-------------------------------------------------------------------------------------













//-------------------------------------------------------------------------------------
//===> Updating Array of Objects

// export default function App() {
// const [bugs, setBugs] = useState([
//   { id: 1, title: "Bug 1", fixed: false },
//   { id: 2, title: "Bug 2", fixed: false },
// ]);

// const handleClick = () => {
//   (one option) // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//  (immer option) setBugs(produce(draft => {
//     const bug = draft.find(bug => bug.id === 1);
//     if (bug) bug.fixed = true;
//   }));
// };

// return (
//   <div>
//     {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? "Fixed" : "New"}></p>)}
//     <Like onClick={() => console.log("clicked")} />
//   </div>
// );
// }

//-------------------------------------------------------------------------------------

//===> Updating Arrays
// export default function App() {
//   const [tags, setTags] = useState(['happy', 'cheerful']);

//   const handleClick = () => {
//     //Add
//     setTags([...tags, 'exciting']);

//     //remove
//     setTags(tags.filter(tag => !== "happy"));
//     //update
//     setTags(tags.map(tag => tag === 'happy' ? 'happiness' : tag));
//   }
// }

//-------------------------------------------------------------------------------------
//==> Updating Nested Object

// export default function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: 'San Francisco',
//       zipCode: 94111
//     }
//   });

//   const handleClick = () => {
//     setCustomer({...customer, address: {...customer.address, zipCode: 94112},
//     });
//   }
// }
//-------------------------------------------------------------------------------------
//====> Like button count
// export default function App() {
//   return (
//     <div>
//       <Like onClick={() => console.log("clicked")} />
//     </div>
//   );
// }

//===> Alert close and open
// export default function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//       )}
//       <Button onClick={() => console.log(setAlertVisibility(true))}>
//         My Button
//       </Button>
//     </div>
//   );
// }
