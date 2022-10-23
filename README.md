# port-process-killer

A process killer by port number tool.
Can be used as an API and CLI.


## Installation

```
npm install --save port-process-killer
```

## Usage

### Use as API

You can use as an API to find out the pid that is using the port.
```
  import { getPid } from "port-process-killer";

  const pid = getPid(8080);
  console.log(`pid is: ${pid}`);
```
API example to kill the process that is being used by a port

```
  import { portKill } from "port-process-killer";

  portKill(8080);
```
If the process was not killed after running the command, you can add the `-f` parameter which will use a `wmic delete` command which is stronger than the `taskkill` command.

```
  import { portKill } from "port-process-killer";

  portKill(8080, -f);
```

### Use as CLI

```
npm install --global port-process-killer
```

```
killProcess --port 8080
```

Use with force (wmic delete)

```
killProcess --port 8080 -f
```

## TODO
Add Linux support.

##  Author

- Creator: [@avishaik](https://github.com/avishaik)


## Acknowledgements

Thanks for using port-process-killer, hope it does a killer job for you!

## License
[MIT](https://choosealicense.com/licenses/mit/)
