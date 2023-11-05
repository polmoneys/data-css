import { html } from 'lit-html';
import { Line } from '../utils/skeletons';
import { dispatch, store } from '../store';
import { ActionTypes } from '../interfaces/state';

export function Select() {
    const { output } = store.getState();

    const onSelectChange = (e: any) => {
        const value = e.target.selectedIndex + 1;
        dispatch(store, ActionTypes.SET_OUTPUT, [
            {
                defaultValue: `Option ${value}`,
            },
        ]);
    };
    const onSelectMultipleChange = (e: any) => {
        const options = e.target.selectedOptions;

        const values = Array.from(options)?.map((option: any) => ({
            defaultValue: `Option ${option.index + 1}`,
        }));

        dispatch(store, ActionTypes.SET_OUTPUT, values);
    };

    return html`
        ${Line(7)}

        <div data-intrinsic-grid data-gap="xl">
            <div data-group="grid" data-gap="sm">
                <label for="standard-select">Standard Select</label>
                <div data-select="">
                    <select
                        id="standard-select"
                        @change=${(e: any) => onSelectChange(e)}
                    >
                        <option value="Option-1">Option 1</option>
                        <option value="Option-2">Option 2</option>
                        <option value="Option-3">Option 3</option>
                        <option value="Option-4">Option 4</option>
                        <option value="Option-5">Option 5</option>
                        <hr />
                        <option value="Option-6">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus></span>
                </div>

                <label for="multi-select">Multiple Select</label>
                <div data-select="multiple">
                    <select
                        id="multi-select"
                        multiple
                        @change=${(e: any) => onSelectMultipleChange(e)}
                    >
                        <option value="Option-1">Option 1</option>
                        <option value="Option-2">Option 2</option>
                        <option value="Option-3">Option 3</option>
                        <option value="Option-4">Option 4</option>
                        <option value="Option-5">Option 5</option>
                        <hr />
                        <option value="Option-6">
                            Option that has too long of a value to fit
                        </option>
                    </select>
                    <span data-select-focus></span>
                </div>
            </div>
            <div data-group="grid" data-gap="sm">
                <label for="standard-select-disabled">Disabled Select</label>
                <div data-select="">
                    <select id="standard-select-disabled" disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>

                <label for="standard-select">Disabled Multiple Select</label>
                <div data-select="multiple">
                    <select id="multi-select-disabled" multiple disabled>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                        <option value="Option 5">Option 5</option>
                        <option value="Option length">
                            Option that is a long value and could wrap
                        </option>
                    </select>
                </div>
            </div>
            <div data-group="grid" data-gap="sm">
                <output
                    data-padding="xy"
                    data-group="flex"
                    data-flex="column"
                    data-ratio="portrait"
                    form="checkbox-showcase"
                    name="checkbox-showcase-result"
                    for="checkbox-a checkbox-b checkbox-c checkbox-d"
                    data-border-shadow="outer"
                >
                    ${output.length > 0
                        ? output.map(
                              (o) =>
                                  html`<p data-font="xl">${o.defaultValue}</p>`,
                          )
                        : '-'}</output
                >
            </div>
        </div>
        ${Line(3)}
    `;
}

//   selectElement.addEventListener('change', (event) => {
//       result.textContent = `You like ${event.target.value}`;
//   });
// export function getAllSelect(): {
//     checked: any[];
//     all: HTMLSelectElement[];
// } {
//     const selects = $$('select:not(:disabled)') as Array<HTMLSelectElement>;
//     const all = Array.from(selects);

//     return {
//         checked: all
//             .map((select) => {
//                 console.log({ select });

//                 if (select.multiple === true) {
//                     console.log({
//                         is: Array.from(select.selectedOptions)?.map(
//                             (option) => option.index,
//                         ),
//                     });

//                     if (select.selectedOptions.length > 0) {
//                         return (
//                             Array.from(select.selectedOptions)
//                                 // 0 based
//                                 ?.map((option) => option.index)
//                                 .join(' + ')
//                         );
//                     }
//                     return -1;
//                 } else {
//                     return select.selectedIndex;
//                 }
//             })
//             .filter((selectedIndex) => selectedIndex === -1),
//         all,
//     };
// }
