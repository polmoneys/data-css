import { html, render } from 'lit-html';
import { store } from '../../store';
import { Card } from './index';

export function renderCardGrid(empty?: boolean) {
    render(Grid(empty), document.querySelector<HTMLDivElement>('aside')!);
}

function Grid(empty?: boolean) {
    // const onOrientationChange = (event: any) => {
    //   const v = Number(event.target.value);
    //   if (v === 0)
    //     return dispatch(store, ActionTypes.SET_ORIENTATION, "portrait");
    //   if (v === 10)
    //     return dispatch(store, ActionTypes.SET_ORIENTATION, "landscape");
    //   dispatch(store, ActionTypes.SET_ORIENTATION, "square");
    // };
    const { orientation } = store.getState();
    const isPortrait = orientation === 'portrait';
    if (empty) return html``;

    /*
    <div class="range-options row">
      <p>Portait</p>
      <p class="mr:auto ml:auto">Landscape</p>
      <p>Square</p>
    </div>
    <br />
    <label>
      <input
        type="range"
        min="3"
        max="30"
        value="3"
        step="3"
        id="range"
        @click=${{ handleEvent: onOrientationChange }}
      />
    </label>
    <br />
    <br />
isPortrait ? 3 : 2
  */
    return html`
        <div
            data-group=""
            data-gap="md"
            data-intrinsic-grid="${isPortrait ? '' : 'md'}"
        >
            ${[...Array(4)].map((_) => Card())}
        </div>
    `;
}
