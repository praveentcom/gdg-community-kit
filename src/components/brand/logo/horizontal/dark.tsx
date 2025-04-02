import ReactDOMServer from 'react-dom/server';

function Element({ location }: { location: string }) {
    return (
      <div className="w-[960px] h-[1330px] bg-transparent relative">
        <img 
          src="https://tmpfiles.org/dl/23557794/base_image_temp.png"
          alt="Brand Logo"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <p className='font-google-sans text-xl font-medium text-google-blue'>{location}</p>
        </div>
      </div>
    );
}

export default function getBrandLogoHorizontalDark({ location }: {location: string}) {
    const componentHtml = ReactDOMServer.renderToStaticMarkup(
        <Element location={location} />
    );

    const fullHtml = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.3/dist/tailwind.min.css" rel="stylesheet">
        <style>body { margin:0; padding:0; }</style>
        </head>
        <body>
        ${componentHtml}
        </body>
    </html>`;

    console.log(fullHtml);

    return fullHtml;
}
