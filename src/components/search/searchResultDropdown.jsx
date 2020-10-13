import React from 'react';
import './searchResultDropdown.scss';

const suggestionRenderer = ({name, id}) => {
    return (
    <div className="flex flex-row">
        <div style={{ flex: '2' }}>{id}</div>
        <div className="flex-1">|</div>
        <div style={{ flex: '2' }}>{name}</div>
        {/* <div className="flex-1">|</div>
        <div style={{ flex: '2' }}>{productType}</div> */}
    </div>
    )
}

const SearchResultDropdown = ({dropdownList}) => {

        if (dropdownList.length === 0) return null;
        return (
          <div className="dropdown-content is-position-absolute is-width-full">
            {dropdownList.map((suggestion, index) => {
            //   const {
            //     leadId: { value: leadId },
            //   } = suggestion;
              return (
                <span
                //   key={leadId}
                  className={`dropdown-item is-clickable`}
                  onClick={() => {
                    // onItemSelect(index);
                  }}
                  onKeyPress={() => {
                    // onItemSelect(index);
                  }}
                  role="button"
                  tabIndex={-1}
                >
                  {suggestionRenderer(suggestion)}
                </span>
              );
            })}
          </div>
        );
}

export default SearchResultDropdown;