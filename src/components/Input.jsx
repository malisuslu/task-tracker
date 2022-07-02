

function Input({ type, id, label, placeholder, value, onChange }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
  }
  
export default Input;