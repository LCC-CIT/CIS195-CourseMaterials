# Download a Whole Web Site

## GNU wget

[wget web site](https://www.gnu.org/software/wget/)

To download an entire website into a local directory using `wget`, you can use the following command:

```bash
wget --recursive --level=inf --wiat=1 --no-parent --no-clobber --page-requisites --convert-links --restrict-file-names=windows --domains example.com https://example.com

```

Here is what each option does:

- `--recursive`: Download the entire site recursively.
- `--level`: Specify recursion maximum depth level depth. Use `inf` as the value for infinite.
- `--wait=1`: Wait the specified number of seconds between the retrievals.
- `-e robots=off`: Turn off the robot exclusion.
- `--no-parent`: Do not download the parent directory.
- `--no-clobber`: Do not overwrite files that already exist.
- `--page-requisites`: Download all the files needed to display the page.
- `--html-extension`: Save files with the `.html` extension.
- `--convert-links`: Convert links to work locally.
- `--restrict-file-names=windows`: Modify filenames to work on Windows.
- `--domains example.com`: Do not follow links outside of the specified domain.
- `--no-check-certificate`: Do not check SSL certificates.
- `--directory`: The directory to download the web site to, replace `/path/to/mydir`.

Replace `example.com` with the domain name of the website you want to download. 

### Example

This command worked for downloading a student website from the LCC web server.

```bash
 wget --recursive --no-parent --wait=1 --no-clobber --page-requisites  --convert-links --restrict-file-names=windows --domains citstudent.lanecc.edu --level=inf -e robots=off http://citstudent.lanecc.edu/~mayberrydd837/HTML_Lab6/
```

