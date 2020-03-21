import React from 'react';

export default class app extends React.Component  {
    componentDidMount() {
        setTimeout(function() {
            alert("hello");
        }, 2000);
        window.addEventListener("beforeunload", ev => {
            ev.preventDefault();
            return (ev.returnValue = alert("Goodbye"));
        });
      }
      render () {
        return <h1>hello</h1>
      }
}
