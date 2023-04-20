export const ContactForm: React.FC = () => {
  const submit = () => {};
  return (
    <form
      className='flex flex-col items-center justify-start space-y-4'
      onSubmit={submit}
    >
      <div className='flex flex-row items-center justify-center space-x-4'>
        <input
          className='rounded-xl p-2 text-black w-1/2'
          placeholder='Name'
          required
        />
        <input
          className='rounded-xl p-2 text-black w-1/2'
          placeholder='Surname'
        />
      </div>
      <input
        className='rounded-xl p-2 text-black w-full'
        placeholder='Subject'
        required
      />
      <textarea
        className='rounded-xl p-2 text-black w-full h-52 max-h-52 md:h-60 md:max-h-60'
        placeholder='Message'
        required
      />
      <button className='p-3 rounded-full bg-red-500 w-1/2'>Send</button>
    </form>
  );
};
