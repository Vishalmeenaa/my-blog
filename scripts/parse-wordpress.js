const fs = require('fs-extra');
const xml2js = require('xml2js');
const path = require('path');
const matter = require('gray-matter');

const parser = new xml2js.Parser();

fs.readFile('wordpress-export.xml', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  parser.parseString(data, (err, result) => {
    if (err) {
      console.error('Error parsing XML:', err);
      return;
    }

    if (!result || !result.rss || !result.rss.channel || !result.rss.channel[0].item) {
      console.error('Unexpected XML structure. Please check your WordPress export file.');
      console.log('XML structure:', JSON.stringify(result, null, 2));
      return;
    }

    const items = result.rss.channel[0].item;
    
    items.forEach((item) => {
      try {
        const title = item.title[0];
        const content = item['content:encoded'][0];
        const slug = item['wp:post_name'][0];
        const date = new Date(item.pubDate[0]);
        const type = item['wp:post_type'][0];

        if (type === 'post' || type === 'page') {
          const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
          const fileName = `${formattedDate}-${slug}.md`;
          const fileContent = matter.stringify(content, {
            title: title,
            date: formattedDate,
            slug: slug,
          });

          fs.outputFileSync(path.join('content', type, fileName), fileContent);
          console.log(`Processed: ${fileName}`);
        }
      } catch (error) {
        console.error('Error processing item:', error);
        console.log('Problematic item:', JSON.stringify(item, null, 2));
      }
    });

    console.log('Parsing complete!');
  });
});