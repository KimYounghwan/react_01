import Button from 'react-bootstrap/Button';

function TypesExample() {
    let cnt = 0;
    function handleClick(e){
        e.target.innerHTML += cnt
    }
  return (
    <>
      <Button onClick={handleClick} variant="outline-primary">Primary 2</Button>{' '}
      <Button onClick={handleClick} variant="secondary">Secondary 3</Button>{' '}
      <Button onClick={handleClick} variant="success">Success</Button>{' '}
      <Button onClick={handleClick} variant="warning">Warning</Button>{' '}
      <Button onClick={handleClick} variant="danger">Danger</Button>{' '}
      <Button onClick={handleClick} variant="info">Info</Button>{' '}
      <Button onClick={handleClick} variant="light">Light</Button>{' '}
      <Button onClick={handleClick} variant="dark">Dark</Button>
      <Button onClick={handleClick} variant="link">Link</Button>
    </>
  );
}

export default TypesExample;