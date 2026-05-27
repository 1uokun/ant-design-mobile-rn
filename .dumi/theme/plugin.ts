import llmsPlugin from './plugins/llms';
import routesPlugin from './plugins/routes';
import semanticMdPlugin from './plugins/semantic-md';

export default async function plugin(api: any) {
  routesPlugin(api);
  semanticMdPlugin(api);
  llmsPlugin(api);
}
