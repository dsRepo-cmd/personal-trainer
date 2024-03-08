function GoogleMaps() {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d620.5173884696003!2d-0.185461!3d51.5302841!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1709906773070!5m2!1sen!2sua"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
