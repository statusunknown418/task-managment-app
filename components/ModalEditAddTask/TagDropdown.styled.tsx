import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';

// export function TagDropdownStyled() {
//   const ref = useRef<React.ReactNode>();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   useEffect(() => {
//     const checkIfClickedOutside = (e: MouseEvent) => {
//       // If the menu is open and the clicked target is not within the menu,
//       // then close the menu
//       const target = e.target as HTMLElement;
//       if (isMenuOpen && ref.current && !ref.current.contains(target)) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', checkIfClickedOutside);
//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener('mousedown', checkIfClickedOutside);
//     };
//   }, [isMenuOpen]);
//   return (
//     <div className="wrapper" ref={ref}>
//       <button className="button" onClick={() => setIsMenuOpen((oldState) => !oldState)}>
//         Click Me
//       </button>
//       {isMenuOpen && (
//         <ul className="list">
//           <li className="list-item">dropdown option 1</li>
//           <li className="list-item">dropdown option 2</li>
//           <li className="list-item">dropdown option 3</li>
//           <li className="list-item">dropdown option 4</li>
//         </ul>
//       )}
//     </div>
//   );
// }

const PLATFORMS = ['Instagram', 'LinkedIn', 'Twitter'];

export const SearchBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [selections, setSelections] = useState<string[]>([]);

  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      return setSelections([...selections, event.target.name]);
    }
    const filtered = selections.filter((name) => name !== event.target.name);
    return setSelections(filtered);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted! Values selected are', selections);
    toggleExpanded();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div>
        <div onClick={toggleExpanded}>
          <h6>PLATFORMS </h6>
          <div
            className={`font-semibold cursor-pointer ${
              expanded ? 'up-arrow' : 'down-arrow'
            }`}
          >
            {selections.length
              ? selections.map((name, i) => (
                  <span key={i}>
                    {i ? ', ' : null}
                    {name}
                  </span>
                ))
              : 'None selected'}
          </div>
        </div>
        {expanded && (
          <div className="border-gray-200 border border-solid">
            {PLATFORMS.map((platform) => (
              <label htmlFor="one" className="block" key={platform}>
                <input
                  type="checkbox"
                  name={platform}
                  value={platform}
                  onChange={handleChange}
                  className="m-3 cursor-pointer"
                />
                {platform}
              </label>
            ))}
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
